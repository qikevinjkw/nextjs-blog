import faunadb from "faunadb";

interface IHitsBySlug {
  data: {
    slug: string;
    hits: number;
  };
}

const HITS_BY_SLUG_COLLECTION = "hits_by_slug";
export default async function handler(req, res) {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  });
  const { slug, clientId } = req.query;

  if (!slug) {
    return res.status(404).json({
      message: "Article slug not provided",
    });
  }

  // const userHasLiked = await client.query(
  //   q.Exists(q.Match(q.Index("clientId-slug"), clientId, slug))
  // );
  // if (userHasLiked) {
  //   return res.status(200).json({});
  // }
  console.log("create like history", clientId, slug);
  await client.query<IHitsBySlug>(
    q.Create(q.Collection("like-history"), {
      data: { clientId, slug },
    })
  );

  const docExists = await client.query(
    q.Exists(q.Match(q.Index(HITS_BY_SLUG_COLLECTION), slug))
  );
  if (!docExists) {
    await client.query<IHitsBySlug>(
      q.Create(q.Collection("hits"), {
        data: { slug, hits: 0 },
      })
    );
  }

  const doc = await client.query<any>(
    q.Get(q.Match(q.Index(HITS_BY_SLUG_COLLECTION), slug))
  );
  const newHitCount = doc.data.hits + 1;
  await client.query(
    q.Update(doc.ref, {
      data: { hits: newHitCount },
    })
  );

  return res.status(200).json({
    hits: newHitCount,
  });
}

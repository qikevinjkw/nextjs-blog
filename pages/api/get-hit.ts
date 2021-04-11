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

  const docExists = await client.query(
    q.Exists(q.Match(q.Index(HITS_BY_SLUG_COLLECTION), slug))
  );
  console.log("docExists", docExists);
  if (!docExists) {
    await client.query<IHitsBySlug>(
      q.Create(q.Collection("hits"), {
        data: { slug, hits: 0 },
      })
    );
    return res.status(200).json({
      hits: 0,
    });
  }

  const userHasLiked = await client.query(
    q.Exists(q.Match(q.Index("clientId-slug"), clientId, slug))
  );
  const doc = await client.query<any>(
    q.Get(q.Match(q.Index(HITS_BY_SLUG_COLLECTION), slug))
  );
  return res.status(200).json({
    hits: doc.data.hits,
    userHasLiked,
  });
}

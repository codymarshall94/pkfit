import { useEffect, useState } from "react";
import { getArticles } from "../../utils/getArticles";
import PageHeader from "../../components/UI/PageHeader";
import ContentCard from "../../components/ContentCard";
import { AnimatePresence, motion } from "framer-motion";
import { Grid, useTheme, Skeleton } from "@mui/material";

const Articles = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    getArticles().then((data) => {
      setArticles(data);
    });
    setLoading(false);
  }, []);

  return (
    <>
      <PageHeader title="Articles" />
      <AnimatePresence>
        <Grid
          component={motion.div}
          layout
          container
          backgroundColor={theme.palette.background.default}
          justifyContent="center"
        >
          {articles.map((article) =>
            loading ? (
              <Skeleton
                variant="rounded"
                sx={{
                  margin: ".5rem",
                }}
              >
                <ContentCard
                  key={article.id}
                  title={article.title}
                  subtitle={article.type}
                  tags={article.tags}
                  linkText="Read More"
                  link={`/articles/${article.id}`}
                />
              </Skeleton>
            ) : (
              <ContentCard
                key={article.id}
                title={article.title}
                subtitle={article.type}
                tags={article.tags}
                linkText="Read More"
                link={`/articles/${article.id}`}
              />
            )
          )}
        </Grid>
      </AnimatePresence>
    </>
  );
};

export default Articles;

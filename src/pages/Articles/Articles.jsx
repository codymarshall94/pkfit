import { useEffect, useState } from "react";
import { getArticles } from "../../utils/getArticles";
import PageHeader from "../../components/UI/PageHeader";
import ContentCard from "../../components/ContentCard";
import { AnimatePresence, motion } from "framer-motion";
import { Grid, useTheme } from "@mui/material";

const Articles = () => {
  const theme = useTheme();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);
  console.log(articles);
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
          {articles.map((article) => (
            <ContentCard
              key={article.id}
              title={article.title}
              subtitle={article.type}
              tags={article.tags}
              linkText="Read More"
              link={`/articles/${article.id}`}
            />
          ))}
        </Grid>
      </AnimatePresence>
    </>
  );
};

export default Articles;

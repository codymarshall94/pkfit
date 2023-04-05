import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../../utils/getArticles";
import { Typography, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(id).then((data) => {
      setArticle(data);
    });
  }, [id]);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "80%", lg: "60%", xl: "50%" },
        padding: "2rem",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: "2rem",
        }}
      >
        {article.title}
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {article.author?.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography variant="h5" sx={{ marginRight: "1rem" }}>
          {article.dateCreated}
        </Typography>
        <AccessTimeIcon sx={{ marginRight: "0.5rem" }} />

        <Typography variant="h5">{article.readLength} min read</Typography>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <ReactMarkdown
          children={article.content}
          remarkPlugins={[remarkBreaks]}
        />
      </Box>
    </Box>
  );
};

export default Article;

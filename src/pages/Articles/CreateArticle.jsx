import React, { useState } from "react";
import { createArticle } from "../../utils/getArticles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const labelStyle = {
  color: "black",
  fontWeight: "bold",
  fontSize: "1.5rem",
  margin: "1rem 0",
};

const articleType = [
  { value: "type", label: "Type" },
  { value: "news", label: "News" },
  { value: "training", label: "Training" },
  { value: "nutrition", label: "Nutrition" },
];

const CreateArticle = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [article, setArticle] = useState({
    author: "",
    title: "",
    content: "",
    tags: [],
    articleType: "",
    readLength: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "tags") {
      setArticle({
        ...article,
        [e.target.name]: e.target.value.split(","),
      });
      return;
    }
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todaysDate = new Date();
    const date = {
      month: todaysDate.getMonth(),
      day: todaysDate.getDate(),
      year: todaysDate.getFullYear(),
    };
    const newArticle = {
      author: {
        id: currentUser.uid,
        name: article.author,
      },
      title: article.title,
      type: article.articleType,
      content: article.content,
      tags: article.tags,
      dateCreated: date,
      readLength: article.readLength,
    };
    createArticle(newArticle);
    navigate("/articles");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Create Article</Typography>
      <Select
        native
        onChange={(e) => handleChange(e)}
        name="articleType"
        required
      >
        {articleType.map((type) => (
          <option value={type.value}>{type.label}</option>
        ))}
      </Select>

      <InputLabel htmlFor="author" sx={labelStyle}>
        {" "}
        Author{" "}
      </InputLabel>
      <TextField
        id="author"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        name="author"
        value={article.author}
        required
      />
      <InputLabel htmlFor="title" sx={labelStyle}>
        {" "}
        Title
      </InputLabel>
      <TextField
        id="title"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        name="title"
        value={article.title}
        required
      />
      <InputLabel htmlFor="content" sx={labelStyle}>
        {" "}
        Content{" "}
      </InputLabel>
      <TextField
        id="content"
        variant="outlined"
        maxRows={10}
        multiline
        onChange={(e) => handleChange(e)}
        name="content"
        value={article.content}
        required
      />
      <InputLabel htmlFor="tags" sx={labelStyle}>
        {" "}
        Tags{" "}
      </InputLabel>
      <TextField
        id="tags"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        name="tags"
        value={article.tags}
        required
      />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {article.tags.map((tag) => (
          <Typography
            variant="h5"
            color="#A5A5A5"
            backgroundColor="#E5E5E5"
            my=".5rem"
            mx=".5rem"
            p=".5rem"
            borderRadius="5px"
          >
            {tag}
          </Typography>
        ))}
      </Box>
      <Button variant="contained" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Box>
  );
};

export default CreateArticle;

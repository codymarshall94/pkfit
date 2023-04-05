import React, { useState } from "react";
import { createArticle } from "../../utils/getArticles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

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
  const [content, setContent] = useState("");
  const [article, setArticle] = useState({
    author: "",
    title: "",
    tags: [],
    articleType: "",
    readLength: "",
  });

  console.log(content);

  const handleChange = (e) => {
    console.log(e.target.name);
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
    const todaysDate = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const newArticle = {
      author: {
        id: currentUser.uid,
        name: "Cody Marshall"
      },
      title: article.title,
      type: article.articleType,
      content: content,
      tags: article.tags,
      dateCreated: todaysDate,
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
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </Select>
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
      <MDEditor
        id="content"
        name="content"
        value={content}
        onChange={setContent}
        required
      />
      <InputLabel htmlFor="readLength" sx={labelStyle}>
        {" "}
        Read Length{" "}
      </InputLabel>
      <TextField
        type="number"
        id="readLength"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        name="readLength"
        value={article.readLength}
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

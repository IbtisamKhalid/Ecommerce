import React from "react";
import { Box, Chip } from "@mui/material";

const TagsFilter = ({ tags, selectedTags, setSelectedTags }) => {
  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  return (
    <Box sx={{ mb: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} onClick={() => handleTagClick(tag)}
          onDelete={selectedTags.includes(tag) ? () => handleTagClick(tag) : undefined}
          color={selectedTags.includes(tag) ? "primary" : "default"}
          variant={selectedTags.includes(tag) ? "filled" : "outlined"} sx={{ cursor: "pointer" }}
        />
      ))}
    </Box>
  );
};

export default TagsFilter;

import articles from "./articles.js";

export default {
  successMessage({
    status = "error",
    response = [],
    message = "нет прав доступа",
    isLoading = true,
  }) {
    return {
      status,
      response,
      message,
      isLoading,
    };
  },
  errorMessage: function ({
    status = "error",
    response = [],
    message = "нет прав доступа",
    isLoading = true,
  }) {
    return {
      status,
      response,
      message,
      isLoading,
    };
  },

  filter: function (name) {
    const array = [];
    articles.forEach(function (article) {
      if (article.source.name === name) {
        array.push(article);
      }
    });

    return array;
  },
};

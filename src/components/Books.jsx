import { useState } from "react";

import SideCard from "./SideCard";
import { books as bookData } from "../constants/mockData";
import BookCards from "./BookCards";
import SearchBox from "./SearchBox";

import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikeList = (book, status) => {
    if (status) {
      const newlikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newlikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search),
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCards
              key={book.id}
              data={book}
              handleLikeList={handleLikeList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;

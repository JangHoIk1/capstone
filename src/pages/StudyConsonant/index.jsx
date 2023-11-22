import ImageContainer from "../../components/ImageContainer";
import Searchbar from "../../components/Searchbar";
import StudyContent from "../../components/StudyContent";
import Pagination from "../../components/Pagination";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axiousInstance from "../../utils/axios";
import { useEffect, useState } from "react";
import SelectLimit from "../../components/SelectLimit/index";

const StudyConsonant = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  // 수어목록
  const [signLanguages, setSignlaguages] = useState([]);
  //현재 페이지
  const [page, setPage] = useState(1);
  //페이지당 갯수
  const [limit, setLimit] = useState(5);
  //db 데이터 갯수
  const [index, setIndex] = useState(0);
  //db 시작 id
  const totalPage = Math.ceil(index / limit);

  const { type } = useParams();

  console.log(type);

  useEffect(() => {
    fetchIndex();
    fetchSignLanguages(page, limit);
  }, [page, limit]);

  const fetchIndex = async () => {
    try {
      const response = await axiousInstance.get(`signLanguages/${type}/index`);
      setIndex(response.data.index);
    } catch (error) {
      console.log(error);
    }
  };

  // 수어목록 불러오기
  const fetchSignLanguages = async (page, limit) => {
    const params = {
      page,
      limit,
    };
    try {
      const response = await axiousInstance.get(`signLanguages/${type}`, {
        params,
      });

      setSignlaguages(response.data.signLanguages);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChage = (value) => {
    if (value === "&laquo" || value === " ...") {
      setPage(1);
    } else if (value === "&lsaquo") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo" || value === "... ") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  };

  return (
    <div>
      <ImageContainer title="1단계 자음 모음 학습하기" noButton />
      <Searchbar />

      {searchValue && (
        <h1 className="study-search-text">
          “{searchValue}”에 대한 검색 결과입니다.
        </h1>
      )}
      <StudyContent type={type} list={signLanguages} />
      <div className="pagination-container">
        <SelectLimit onLimitChange={setLimit} />
        <Pagination
          totalPage={totalPage}
          page={page}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChage}
        />
      </div>
    </div>
  );
};

export default StudyConsonant;

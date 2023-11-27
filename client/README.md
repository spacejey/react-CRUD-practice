- home: 3001
- JSON server: 3000 ( json-server --watch ./src/db/data.json --port 3000 )

1. Build the folders
2. DB
3. Put functions to the btns
4. Install Json-server for REST API practice
4-1. REST API: With URI - POST, GET, PUT, DELETE 메서드를 사용하여 CRUD 구축
5. [Error]API 연동하려고 하는데, 단어만 보이고, 날짜별 버튼이 안보임 => URI 포트를 3001로 하고 있었기 때문이다. 포트가 너무 많이 작동되고 있어서, 포트를 강제 종료하는 법을 찾아봤다.
5-1. terminal에서 netstat -a 검색, kill pid번호 하면 해당 포트가 삭제된다. 
6. Uncaught Error가 계속 생겼는데, 알고보니 react-router-dom의 Link를 사용 중인데, Router로 컴포넌트들을 감싸지 않은 것이 문제가 되었다. 해결 완료.
7. useParams는 해당 컴포넌트가 어떤 URL 파라미터를 받아야 하는지 결정하는 훅이다. URI에서 동적으로 변하는 부분을 추출해주는 거다! 대견해!!
8. useEffect는 API URI를 가져오기 위해 사용한다. 링크를 통해 데이터를 계속 가져오는 것인데, 의존성 배열이라는 개념이 있다. 두번째 파라미터 값으로 빈 배열을 넣으면 첫 동기화된 데이터로 사용하는 거고, 컴포넌트를 넣으면 그 상태값이 변경될때마다 콜백함수가 리랜더링 된다는 뜻이다.

9. Day랑 DayList에서 사용하는 useEffect가 비슷하기에 useFetch를 이용해서 제작했다. 가져오는 동일한 로직을 설계하고, 각 컴포넌트에서는 State로 가져오면 된다.

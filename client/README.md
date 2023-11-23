1. Build the folders
2. DB
3. Put functions to the btns
4. Install Json-server for REST API practice
4-1. REST API: With URI - POST, GET, PUT, DELETE 메서드를 사용하여 CRUD 구축
5. [Error]API 연동하려고 하는데, 단어만 보이고, 날짜별 버튼이 안보임 => URI 포트를 3001로 하고 있었기 때문이다. 포트가 너무 많이 작동되고 있어서, 포트를 강제 종료하는 법을 찾아봤다.
5-1. terminal에서 netstat -a 검색, kill pid번호 하면 해당 포트가 삭제된다. 
6. Uncaught Error가 계속 생겼는데, 알고보니 react-router-dom의 Link를 사용 중인데, Router로 컴포넌트들을 감싸지 않은 것이 문제가 되었다. 해결 완료.




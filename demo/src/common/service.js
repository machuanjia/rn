
const BaseURL = "https://api.douban.com/v2/";

export default Douban_APIS = {
    /***
     *
     * GET  https://api.douban.com/v2/book/search
     q    查询关键字    q和tag必传其一
     tag    查询的tag    q和tag必传其一
     start    取结果的offset    默认为0
     count    取结果的条数    默认为20，最大为100
     *
     */

    book_search: BaseURL + "book/search",


    /***
     * https://api.douban.com/v2/book/:id
     */
    book_detail_id: BaseURL + "book/",

    /**
     * /v2/movie/search?q={text}
     */
    movie_search: BaseURL + "movie/search"
};
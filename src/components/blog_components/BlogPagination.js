const BlogPagination = () => {
    return (<>
        <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
            <a className="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
        </nav>

    </>);
}

export default BlogPagination;
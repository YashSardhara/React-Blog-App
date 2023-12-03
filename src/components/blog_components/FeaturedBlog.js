const FeaturedBlog = () => {
    return (<>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div className="col-lg-6 px-0">
                <h1 className="display-4 fst-italic blog-main-title">Title of a longer featured blog post</h1>
                <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
            </div>
        </div>
    </>);
}

export default FeaturedBlog;
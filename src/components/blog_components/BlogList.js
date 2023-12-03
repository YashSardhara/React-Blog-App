import BlogPagination from './BlogPagination';
import BlogAside from './BlogAside';

const BlogList = ({ blogs }) => {
    return (
        <>
            <main className="container">
                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 mb-4 fst-italic border-bottom">
                            From the Firehose
                        </h3>
                        {blogs.map((blog, index) => (
                            <article key={index + "-blog"} className="blog-post">
                                <h2 className="display-5 link-body-emphasis mb-1">{blog.title}</h2>
                                <p className="blog-post-meta">{blog.timestamp} by <a href="#">{blog.author}</a></p>
                                <blockquote class="blockquote">
                                    <p>{blog.subtitle}</p>
                                </blockquote>
                                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                            </article>
                        ))}
                        {/* Blogs Pagination */}
                        <BlogPagination />
                    </div>
                    {/* Blogs Aside section (About, Recent posts, Archives, Elsewhere) */}
                    <BlogAside />
                </div>
            </main>
        </>
    );
};

export default BlogList;

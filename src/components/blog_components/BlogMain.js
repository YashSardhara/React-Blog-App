import BlogList from "./BlogList";
import FeaturedBlog from "./FeaturedBlog";
import FeaturedPost from "./FeaturedPost";

const BlogMain = ({blogs}) => {
    return (<>
        <FeaturedBlog />
        <FeaturedPost />
        <BlogList blogs={blogs} />

    </>);
}

export default BlogMain;
import Section from "../sections/section";
import "./_rules.css";

type PostContainerProps = {
    children?: React.ReactNode;
}

type PostItemProps = {
    title: string;
    content: string;
    icon: string;
    contentHidden: string;
    itemNumber?: string
}

export default function PostContainer(props: PostContainerProps & React.HTMLAttributes<HTMLDivElement>) {
    const { children } = props;
    return <Section className="features" hasContainer hasRow>
        {children}
    </Section>
}

PostContainer.PostItem = (props: PostItemProps & React.HTMLAttributes<HTMLDivElement>) => {
    const { title, content, icon, contentHidden, itemNumber } = props;
    return <div className="col-lg-4 col-12">
        <div className={`features-post ${itemNumber}`} >
            <div className="features-content">
                <div className="content-show">
                    <h4><i className={icon}></i>{title}</h4>
                </div>
                <div className="content-hide">
                    <p>{content}</p>
                    <p className="hidden-sm">{contentHidden}</p>
                    <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
                </div>
            </div>
        </div>
    </div>
}
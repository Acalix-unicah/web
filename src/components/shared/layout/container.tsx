import type { SectionProps } from "../../../api/namespaces/sectionType"

export default function Container(props: SectionProps) {
    const { children } = props;
    return <div className="container">{children}</div>
}
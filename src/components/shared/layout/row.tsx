import type { SectionProps } from "../../../api/namespaces/sectionType";

export default function Row(props: SectionProps) {
    const { children } = props;
    return <div className="row">{children}</div>
}
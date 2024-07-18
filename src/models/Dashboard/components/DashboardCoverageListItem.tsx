interface DashboardCoverageListItemProps {
    item: string
    value: string
}

function DashboardCoverageListItem({ item, value }: DashboardCoverageListItemProps) {
    return (
        <li className="flex justify-between">
            <span className="text-[#57555C]">{item}</span>
            <strong>{value}</strong>
        </li>
    )
}

export default DashboardCoverageListItem

import './Refresh.css'

interface RefreshWidgetParams {
    onRefresh: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
}

export default function RefreshWidget(props: RefreshWidgetParams) {
    const {onRefresh} = props
    return (
        <div className="refresh-container">
            <h1 className='title'>Notes</h1>
            <span className="refresh" onClick={onRefresh}>🗘</span>
        </div>
    )
}
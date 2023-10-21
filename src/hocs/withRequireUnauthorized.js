import RequireUnauthorized from '../components/RequireUnauthorized'


const withRequireUnauthorized = (Component) => (props) => (
    <RequireUnauthorized>
        <Component { ...props }/>
    </RequireUnauthorized>
)

export default withRequireUnauthorized
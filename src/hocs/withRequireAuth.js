import RequireAuth from '../components/RequireAuth'


const withRequireAuth = (Component) => (props) => (
    <RequireAuth>
        <Component { ...props }/>
    </RequireAuth>
)

export default withRequireAuth
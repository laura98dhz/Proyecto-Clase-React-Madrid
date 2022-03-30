import Loading from "./Loading";

export function withLoading(WrappedComponent, LoadingComponent = () => <Loading />) {
    return ({ loading, ...props }) => {
        return loading ? <LoadingComponent /> : <WrappedComponent {...props} />
    }
}

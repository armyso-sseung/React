import BaseLayout from "../layout/BaseLayout";
import ListComponent from "../components/ListComponent";

const ListPage = () => {
    return (
        <BaseLayout>
            <div className={"list-page"}>
                <ListComponent />
            </div>
        </BaseLayout>
    )
}


export default ListPage;
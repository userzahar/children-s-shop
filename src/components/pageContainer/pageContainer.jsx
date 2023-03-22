//контейнер, який вкладається у всі структурні
//частини сторінки: хедер, мейн і футер
//слугує лише для того, щоб задати положення контенту
//відносно сторінки і відносно медіаправил

import { PageContainerDiv } from "./PageContainer.styled";

export function PageContainer({children}) {
    return(
        <PageContainerDiv>
            {children}
        </PageContainerDiv>
    );
}
import { ParentProps } from "solid-js";
import TableWrapper from "../../components/table/TableWrapper/TableWrapper";
import Heading from "../../components/ui/Heading";
import FetchStatusIndicator from "./FetchStatusIndicator";
import { useProjectsFetch } from "./hooks/useProjectsFetch";

type Props = {
  heading: () => number;
} & ParentProps;

const ProjectsPageWrapper = ({ children, heading }: Props) => {
  const { isError, isLoading } = useProjectsFetch();

  return (
    <>
      <Heading>{heading()}</Heading>
      <FetchStatusIndicator isError={isError()} isLoading={isLoading()}>
        <TableWrapper columns={["id", "name", "status", "actions"]}>
          {children}
        </TableWrapper>
      </FetchStatusIndicator>
    </>
  );
};

export default ProjectsPageWrapper;

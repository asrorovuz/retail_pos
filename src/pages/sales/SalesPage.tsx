import PageLayout from "../../app/layout/PageLayout";
import PageContainer from "../../features/page-container/ui/PageContainer";

const SalesPage = () => {
  return (
    <PageLayout
      header={null}
      main={<PageContainer leftPanel={<>salom</>} rightPanel={<>xayr</>} />}
      footer={true}
    />
  );
};

export default SalesPage;

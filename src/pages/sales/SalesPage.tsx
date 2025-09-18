import PageLayout from "../../widgets/layout/PageLayout";
import PageContainer from "../../features/page-container/ui/PageContainer";

const SalesPage = () => {
  return (
    <PageLayout
      main={<PageContainer leftPanel={<>salom</>} rightPanel={<>xayr</>} />}
      footer={true}
    />
  );
};

export default SalesPage;

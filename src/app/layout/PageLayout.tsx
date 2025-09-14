import Footer from "../../widgets/footer/ui/Footer";
import type { propsLayout } from "../model/layout";

const PageLayout = ({ footer, main }: propsLayout) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      {main && (
        <main className={`overflow-y-auto ${footer ? "h-[calc(100vh - 60px)]" : "h-screen"}`}>
          {main}
        </main>
      )}

      {footer && (
        <footer className="h-[60px]">
          <footer className="fixed bottom-0 w-full py-2 px-5 bg-gray-100">
            <Footer />
          </footer>
        </footer>
      )}
    </div>
  );
};

export default PageLayout;

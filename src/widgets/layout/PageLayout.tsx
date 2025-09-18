import Footer from "../footer/ui/Footer";
import type { propsLayout } from "../../shared/model/layout";

const PageLayout = ({ footer, main }: propsLayout) => {
  return (
    <div className="h-screen flex flex-col justify-between bg-gray-100">
      {main && (
        <main className={`overflow-y-auto ${footer ? "h-[calc(100vh - 60px)]" : "h-screen"}`}>
          {main}
        </main>
      )}

      {footer && (
        <footer className="h-[60px]">
          <footer className="fixed bottom-0 w-full py-2 px-5 bg-gray-200">
            <Footer />
          </footer>
        </footer>
      )}
    </div>
  );
};

export default PageLayout;

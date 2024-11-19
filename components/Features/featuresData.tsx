import { Feature } from "@/types/feature";
import { FaFilePdf, FaFileWord, FaSyncAlt, FaMarkdown, FaWordpress } from "react-icons/fa"; // Added FaWordpress
import { BiMerge } from "react-icons/bi";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: FaFilePdf,
    title: "Docs to PDF",
    description: "Easily convert Google Docs to high-quality PDFs Within in Seconds on our Tool.",
    url: "https://workspace.google.com/marketplace/app/docs_to_pdf/302636103705", // URL for this product
  },
  {
    id: 2,
    icon: FaFileWord,
    title: "PDF to Docs",
    description: "Seamlessly transform PDF documents into editable Google Docs.",
    url: "https://workspace.google.com/marketplace/app/pdf_to_docs/28755135712", // URL for this product
  },
  {
    id: 3,
    icon: BiMerge,
    title: "Merge Docs Pro",
    description: "Combine multiple Google Docs into one comprehensive document seamlessly.",
    url: "https://workspace.google.com/marketplace/app/merge_docs_pro/61337277026", // URL for this product
  },
  {
    id: 4,
    icon: FaSyncAlt,
    title: "Bulk Converter Pro",
    description: "Process large batches of file conversions effortlessly.",
    url: "https://workspace.google.com/marketplace/app/bulk_converter_pro/327730061402", // URL for this product
  },
  {
    id: 5,
    icon: FaMarkdown,
    title: "Docs to Markdown Pro",
    description: "Convert Google Docs to clean and optimized Markdown files.",
    url: "https://workspace.google.com/marketplace/app/docs_to_markdown_pro/483386994804", // URL for this product
  },
  {
    id: 6,
    icon: FaWordpress,
    title: "Docs to WordPress Pro",
    description: "Publish Google Docs content directly to your WordPress site with ease.",
    url: "https://workspace.google.com/marketplace/app/docs_to_wordpress_pro/346830534164", // URL for this product
  },
];

export default featuresData;

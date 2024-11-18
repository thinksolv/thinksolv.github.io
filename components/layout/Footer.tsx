import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Thinksolv Technologies</h3>
            <p className="text-gray-600">Building Solutions Thoughtfully</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/services/appsheet">AppSheet Development</Link></li>
              <li><Link href="/services/automation">Workflow Automation</Link></li>
              <li><Link href="/services/document-ai">Document AI</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/products/docs-converter">Docs Converter</Link></li>
              <li><Link href="/products/bulk-converter">Bulk Converter Pro</Link></li>
              <li><Link href="/products/markdown">Docs to Markdown Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@thinksolv.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Thinksolv Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

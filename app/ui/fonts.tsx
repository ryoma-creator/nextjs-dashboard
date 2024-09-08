import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'], 
});


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
            {children}
        </body>
      </html>
    );
  }

// My Memo
//   Function argument: { children }
//   Type definition for the argument: { children: React.ReactNode }
//   Function body: { return (...); }
  
//   This is TypeScript syntax, where the function's argument and its type are defined at the same time.

// React.ReactNode represents any type 
// that a React component can return, 
// such as React elements (JSX), strings, numbers, and more.

// About children: In the context of layout.js, 
// children refers to other pages or components that are placed within that layout.

// others such as inter and so on ➡️ check my notes. I figure out everything perfectly.

  
  
  
  
  
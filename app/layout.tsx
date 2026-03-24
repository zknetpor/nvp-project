import React from 'react';

const RootLayout = ({ children }) => {
    return (
        <html>
            <head>
                <title>NVP Project</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
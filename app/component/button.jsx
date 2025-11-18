'use client';


export default function Button({ onClick, children, style = {} }) {
 return (
   <button
     type="button"
     onClick={onClick}
     style={{
       padding: '5px 15px',
      //  backgroundColor: '#E4DCD2',
       color: '#FFFFFF',
       border: 'none',
      //  fontWeight:'800',
      //  borderRadius: '11px',
       cursor: 'pointer',

       ...style, // Permet de changer le style de certains buttons
     }}
   >
     {children}
   </button>
 );
}

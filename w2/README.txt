{\rtf1\ansi\ansicpg1252\cocoartf1348\cocoasubrtf170
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid1\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid1}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}}
\paperw11900\paperh16840\margl1440\margr1440\vieww26820\viewh14080\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural

\f0\fs28 \cf0 Single Page Web Applications with AngularJS
\fs24 \

\i (Johns Hopkins University - Coursera)\

\i0 \

\b\fs26 === Module 2 Coding Assignment ===\

\b0\fs24 \

\b General Idea\

\b0 \
The idea of this assignment is to create a "check off" shopping List application.\
\
Think of being in a store with a shopping list that allows you to "check off" the items you've already bought, except instead of checking them off, the bought item simply moves to the "Already Bought" list.\
\
Your HTML page should display 2 lists, one titled "To Buy" and the other "Already Bought".\
\
The "To Buy" list should be pre-populated with a list of at least 5 items. (Hint: Use an array of object literals, where each item will be similar to \{ name: "cookies", quantity: 10 \}) Each shopping list item is to have a name and quantity. It should be displayed to the user in the format of Buy item_quantity item_name. For example, shopping list item \{ name: "cookies", quantity: 10 \} would be listed as Buy 10 cookies.\
\
Next to each item in the list should be a button with the label "Bought". When the user clicks on the "Bought" button, its associated item should be removed from the "To Buy" list and appear in the "Already Bought" list.\
\
The "Already Bought" list should initially be empty and display a message "Nothing bought yet". Make sure the message appears only when the list is empty. Once something is "bought" and appears on this list, the format of each item in the list should be Bought item_quantity item_name. For example, the bought item of 10 cookies mentioned before would appear in this list as Bought 10 cookies.\
\
Once the user "buys" every item on the "To Buy" list, i.e., clicks on the "Bought" button for every item in the "To Buy" list, instead of the empty "To Buy" list, display the message "Everything is bought!"\
\

\b Rules\

\b0 \
Breaking one of these rules will cause you to fail the assignment:\
\
\pard\tx220\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\li720\fi-720\pardirnatural
\ls1\ilvl0\cf0 {\listtext	\'95	}You are not allowed to use regular HTML onclick attribute to bind behavior to the button. You must use the AngularJS way of binding behavior.\
{\listtext	\'95	}At no point should your Javascript code look up anything in the DOM of the browser.\
{\listtext	\'95	}Your implementation should not consist of only 1 controller that does it all: take care of both lists, store the data for both lists, etc.}
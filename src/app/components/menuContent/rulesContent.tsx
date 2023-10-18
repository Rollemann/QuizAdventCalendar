import React from 'react'

async function getRules() {
    const res = await fetch('http://localhost:8090/api/collections/rules/records?page=1', {cache:"no-cache"});
    const data = await res.json();
    return data.items;
}

async function RulesContent() {
    const rulesText = await getRules();
    
  return (
    <div>{rulesText[0].text}</div>
  )
}

export default RulesContent
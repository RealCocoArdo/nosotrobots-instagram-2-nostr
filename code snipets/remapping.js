// Input data: assume we're working with items from n8n
return items.map(item => {
  const json = item.json;

  // If 'caption' exists, replace it with 'content'
  if (json.caption !== undefined) {
    json.content = json.caption;
    delete json.caption;
  }

  return { json };
});
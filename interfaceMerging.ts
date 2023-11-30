// Express Base
interface Request {
  body: any;
}

// Express JSON
interface Request {
  json: any;
}

// Our custom merging
interface Request {
  customField: any;
}

function handleRequest(req: Request) {
  req.body;
  req.json;
  req.customField; // Here is our custom definition
}

export function safeJSONStringify (input, maxDepth)
{

  var output,
  refs = [],
  refsPaths = [];

  maxDepth = maxDepth || 5;

  function recursion (input, path, depth)
  {
    var output = {},
    pPath,
    refIdx;

    path  = path  || "";
    depth = depth || 0;
    depth++;

    if (maxDepth && depth > maxDepth)
    {
      return "{depth over " + maxDepth + "}";
    }

    for (var p in input)
    {
      pPath = (path ? (path+".") : "") + p;
      if (typeof input[p] === "function")
      {
        //output[p] = "{function}";
      }
      else if (typeof input[p] === "object")
      {
        /*
        refIdx = refs.indexOf(input[p]);

        if (-1 !== refIdx)
        {
          output[p] = recursion(input[p])"{reference to " + refsPaths[refIdx]  + "}";
        }
        else
        {
        */
          refs.push(input[p]);
          refsPaths.push(pPath);
          output[p] = recursion(input[p], pPath, depth);
        //}
      }
      else
      {
        output[p] = input[p];
      }
    }

    return output;
  }

  if (typeof input === "object")
  {
    output = recursion(input);
  }
  else
  {
    output = input;
  }

  return JSON.stringify(output);
}

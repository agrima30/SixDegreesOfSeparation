const findPath = (start, end, adj) => {
  console.log(adj);
  
  const ans = [];

  function dfs(start, end, adj, vis, path) {
    vis[start]=true;
    if (start === end)
    {
        ans.push([...path]);
    }
    else{
        for(let i=0; i<adj[start].length; i++){
            const x=adj[start][i];
            if(!vis[x]){
                vis[x]=true;
                path.push(x);
                dfs(x,end,adj,vis,path);
                path.pop();
            }
        }
    }
    vis[start]=false;
  }

  function path(start, end, adj) {
    let vis = new Array(adj.length).fill(false);
    let path=[];
    path.push(start);
    dfs(start,end,adj,vis,path);
  }

  path(start,end,adj);

  return ans[0];

};

export default findPath;
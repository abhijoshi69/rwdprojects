self.onmessage=function(e)
{
	self.postMessage("Hello "+e.data+" from Web Worker")
};
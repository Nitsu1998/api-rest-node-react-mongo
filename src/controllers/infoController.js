import os from 'os'

class InfoController {
    getInfoController(req, res) {
        try{
            const info = {
                inputArguments: (process.argv).slice(2),
                operatingSystem: process.platform,
                nodeVersion: process.version,
                rss: process.memoryUsage(),
                ejecutionPath: process.execPath,
                processID: process.pid,
                proyectFolder: process.cwd(),
                serverProcessors: os.cpus().length,
            }
            return res.json(info)
        }catch(err){
            console.log(err)
        }
    }
}


const infoController = new InfoController();
export default infoController;

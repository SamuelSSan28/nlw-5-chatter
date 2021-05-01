import { http } from './http'

import './websocket/client'
import './websocket/admin'

const port = 3333

http.listen(3333, () => console.log(`Server is running on port ${port}`))
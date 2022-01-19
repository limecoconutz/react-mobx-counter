import { observer } from "mobx-react";

const Temp = observer(({ temperature}) => {
  <div>
    {temperature.temperature}
  </div>
})

export default Temp;
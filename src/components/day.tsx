import * as React from 'react';

import Utils from '../helpers/utils';
import DayModel from '../models/day';

interface DayProps {
    day: DayModel;
}

const Day: React.FC<DayProps> = (props: DayProps) => {
    const date = `${props.day.date.getFullYear()}-${Utils.extractMonthString(props.day.date)}-${Utils.extractDateString(props.day.date)}`;

    return (
        <div>
            {date}
        </div>
    );
}

export default Day;
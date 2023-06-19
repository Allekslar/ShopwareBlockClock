import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import Iterator from 'src/helper/iterator.helper';


export default class ClockPlugin extends Plugin {
    static options = {
        dataClockTime: '[data-clock-time="time"]',
        dataClockDate: '[data-clock-date="date"]',
    };

    init() {
        this._dataClockTime = DomAccess.querySelectorAll(document, this.options.dataClockTime);
        this._dataClockDate = DomAccess.querySelectorAll(document, this.options.dataClockDate);
        setInterval(this.onWhatTimeIsIt.bind(this), 1000);
    }

    onWhatTimeIsIt() {
        const clock = new Date();
        if (this._dataClockTime) {
            Iterator.iterate(this._dataClockTime, (dataClockTime) => {
                this._updateTime(clock, dataClockTime);
            });
        }

        if (this._dataClockDate) {
            Iterator.iterate(this._dataClockDate, (dataClockDate) => {
                this._updateDate(clock, dataClockDate);
            });
        }
    }

    _updateNode(data, nodeItem) {
        nodeItem.innerText = data;
    }

    _updateTime(clock, dataClockTime) {
        const timeIs = this.getTime(clock);
        this._updateNode(timeIs, dataClockTime);
    }

    _updateDate(clock, dataClockDate) {
        const dateIs = this.getDate(clock);
        this._updateNode(dateIs, dataClockDate);
    }

    getTime(clock) {
        const hour = this.formatTimeUnit(clock.getHours());
        const mn = this.formatTimeUnit(clock.getMinutes());
        const sec = this.formatTimeUnit(clock.getSeconds());
        return `${hour} : ${mn} : ${sec}`;
    }

    getDate(clock) {
        const day = this.formatTimeUnit(clock.getDate());
        const month = this.formatTimeUnit(clock.getMonth() + 1);
        const year = clock.getFullYear();
        return `${day} - ${month} - ${year}`;
    }

    formatTimeUnit(unit) {
        return unit < 10 ? `0${unit}` : unit;
    }
}

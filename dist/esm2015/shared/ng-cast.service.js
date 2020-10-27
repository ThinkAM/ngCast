import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class NgCastService {
    constructor() {
        this.window = window;
        this.status = {
            casting: false
        };
        this.onInitSuccess = function () {
            console.log('GCast initialization success');
        };
        this.onError = function (err) {
            console.log('GCast initialization failed', err);
        };
        this.discoverDevices = () => {
            let self = this;
            let subj = new Subject();
            this.cast.requestSession((s) => {
                self.session = s;
                self.setCasting(true);
                subj.next('CONNECTED');
            }, function (err) {
                self.setCasting(false);
                if (err.code === 'cancel') {
                    self.session = undefined;
                    subj.next('CANCEL');
                }
                else {
                    console.error('Error selecting a cast device', err);
                }
            });
            return subj;
        };
        this.onMediaDiscovered = (categories) => {
            let script = window['document'].createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
            window['document'].body.appendChild(script);
            globalThis.CastPlayer.mediaJSON.categories = categories;
            return globalThis.CastPlayer.addMediaContents();
        };
        this.play = () => {
            this.currentMedia.play(null);
        };
        this.pause = () => {
            this.currentMedia.pause(null);
        };
        this.stop = () => {
            this.currentMedia.stop(null);
        };
        this.onMediaError = (err) => {
            console.error('Error launching media', err);
        };
        globalThis.CastPlayer.mediaJSON = {
            categories: []
        };
    }
    initializeCastApi() {
        this.cast = this.window['chrome'].cast;
        let sessionRequest = new this.cast.SessionRequest('4F8B3483');
        let apiConfig = new this.cast.ApiConfig(sessionRequest, () => { }, (status) => { if (status === this.cast.ReceiverAvailability.AVAILABLE) { } });
        let x = this.cast.initialize(apiConfig, this.onInitSuccess, this.onError);
    }
    ;
    initialize(mediaContents) {
        if (mediaContents) {
            globalThis.CastPlayer.initializeUI();
            globalThis.CastPlayer.setupLocalPlayer();
            globalThis.CastPlayer.initializeCastPlayer();
        }
    }
    setCasting(value) {
        this.status.casting = value;
        globalThis.CastPlayer.setupRemotePlayer();
    }
    getStatus() {
        return this.status;
    }
}
NgCastService.decorators = [
    { type: Injectable }
];
NgCastService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RoaW5rZXIvZGV2L3RoaW5rYW0vbmdDYXN0LyIsInNvdXJjZXMiOlsic2hhcmVkL25nLWNhc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPL0IsTUFBTSxPQUFPLGFBQWE7SUFTeEI7UUFOUSxXQUFNLEdBQVEsTUFBTSxDQUFDO1FBRXRCLFdBQU0sR0FBRztZQUNkLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQWtCRixrQkFBYSxHQUFHO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQztRQUVGLFlBQU8sR0FBRyxVQUFVLEdBQVE7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUM7UUFFRixvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7WUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsVUFBVSxHQUFRO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUN6QixJQUFJLENB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VSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEIsQ0FBQzs7O1lBL0ZGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgQ2FzdFBsYXllcjogYW55O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdDYXN0U2VydmljZSB7XG4gIHByaXZhdGUgY2FzdDogYW55O1xuICBwcml2YXRlIGN1cnJlbnRNZWRpYTogYW55O1xuICBwcml2YXRlIHdpbmRvdzogYW55ID0gd2luZG93O1xuXG4gIHB1YmxpYyBzdGF0dXMgPSB7XG4gICAgY2FzdGluZzogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBnbG9iYWxUaGlzLkNhc3RQbGF5ZXIubWVkaWFKU09OID0ge1xuICAgICAgY2F0ZWdvcmllczogW11cbiAgICB9O1xuICB9XG5cbiAgaW5pdGlhbGl6ZUNhc3RBcGkoKSB7XG4gICAgdGhpcy5jYXN0ID0gdGhpcy53aW5kb3dbJ2Nocm9tZSddLmNhc3Q7XG4gICAgbGV0IHNlc3Npb25SZXF1ZXN0ID0gbmV3IHRoaXMuY2FzdC5TZXNzaW9uUmVxdWVzdCgnNEY4QjM0ODMnKTtcbiAgICBsZXQgYXBpQ29uZmlnID0gbmV3IHRoaXMuY2FzdC5BcGlDb25maWcoc2Vzc2lvblJlcXVlc3QsXG4gICAgICAoKSA9PiB7IH0sXG4gICAgICAoc3RhdHVzOiBhbnkpID0+IHsgaWYgKHN0YXR1cyA9PT0gdGhpcy5jYXN0LlJlY2VpdmVyQXZhaWxhYmlsaXR5LkFWQUlMQUJMRSkgeyB9IH1cbiAgICApO1xuICAgIGxldCB4ID0gdGhpcy5jYXN0LmluaXRpYWxpemUoYXBpQ29uZmlnLCB0aGlzLm9uSW5pdFN1Y2Nlc3MsIHRoaXMub25FcnJvcik7XG4gIH07XG5cbiAgb25Jbml0U3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnR0Nhc3QgaW5pdGlhbGl6YXRpb24gc3VjY2VzcycpO1xuICB9O1xuXG4gIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnR0Nhc3QgaW5pdGlhbGl6YXRpb24gZmFpbGVkJywgZXJyKTtcbiAgfTtcblxuICBkaXNjb3ZlckRldmljZXMgPSAoKSA9PiB7XG4gICAgbGV0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgbGV0IHN1YmogPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMuY2FzdC5yZXF1ZXN0U2Vzc2lvbigoczogYW55KSA9PiB7XG4gICAgICBzZWxmLnNlc3Npb24gPSBzO1xuICAgICAgc2VsZi5zZXRDYXN0aW5nKHRydWUpO1xuICAgICAgc3Viai5uZXh0KCdDT05ORUNURUQnKTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbGYuc2V0Q2FzdGluZyhmYWxzZSk7XG4gICAgICBpZiAoZXJyLmNvZGUgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgIHNlbGYuc2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3Viai5uZXh0KCdDQU5DRUwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbGVjdGluZyBhIGNhc3QgZGV2aWNlJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3ViajtcbiAgfTtcblxuICBvbk1lZGlhRGlzY292ZXJlZCA9IChjYXRlZ29yaWVzOiBhbnlbXSkgPT4ge1xuICAgIGxldCBzY3JpcHQgPSB3aW5kb3dbJ2RvY3VtZW50J10uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vY3YvanMvc2VuZGVyL3YxL2Nhc3Rfc2VuZGVyLmpzP2xvYWRDYXN0RnJhbWV3b3JrPTEnKTtcbiAgICB3aW5kb3dbJ2RvY3VtZW50J10uYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgZ2xvYmFsVGhpcy5DYXN0UGxheWVyLm1lZGlhSlNPTi5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcblxuICAgIHJldHVybiBnbG9iYWxUaGlzLkNhc3RQbGF5ZXIuYWRkTWVkaWFDb250ZW50cygpO1xuICB9O1xuXG4gIGluaXRpYWxpemUobWVkaWFDb250ZW50czogYW55KTogdm9pZCB7XG4gICAgaWYgKG1lZGlhQ29udGVudHMpIHtcbiAgICAgIGdsb2JhbFRoaXMuQ2FzdFBsYXllci5pbml0aWFsaXplVUkoKTtcbiAgICAgIGdsb2JhbFRoaXMuQ2FzdFBsYXllci5zZXR1cExvY2FsUGxheWVyKCk7XG4gICAgICBnbG9iYWxUaGlzLkNhc3RQbGF5ZXIuaW5pdGlhbGl6ZUNhc3RQbGF5ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5ID0gKCkgPT4ge1xuICAgIHRoaXMuY3VycmVudE1lZGlhLnBsYXkobnVsbCk7XG4gIH07XG5cbiAgcGF1c2UgPSAoKSA9PiB7XG4gICAgdGhpcy5jdXJyZW50TWVkaWEucGF1c2UobnVsbCk7XG4gIH07XG5cbiAgc3RvcCA9ICgpID0+IHtcbiAgICB0aGlzLmN1cnJlbnRNZWRpYS5zdG9wKG51bGwpO1xuICB9O1xuXG4gIG9uTWVkaWFFcnJvciA9IChlcnI6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxhdW5jaGluZyBtZWRpYScsIGVycik7XG4gIH07XG5cbiAgc2V0Q2FzdGluZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdGF0dXMuY2FzdGluZyA9IHZhbHVlO1xuICAgIGdsb2JhbFRoaXMuQ2FzdFBsYXllci5zZXR1cFJlbW90ZVBsYXllcigpO1xuICB9XG5cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c1xuICB9XG59XG4iXX0=
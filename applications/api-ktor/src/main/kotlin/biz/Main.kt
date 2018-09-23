import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main(args: Array<String>) {
  val server = embeddedServer(Netty, port = 9090) {
    routing {
      get("/") {
        call.respondText("Hello World!", ContentType.Text.Plain)
      }
      get("/test") {
        call.respondText("""{"name": "world"}""")
      }
    }
  }
  server.start(wait = true)
}
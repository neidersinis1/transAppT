import FormMessages from "@/components/FormMessages"
import BodyMessages from "@/components/BodyMessages"

export default function Messages () {
  return (
    <>
      <BodyMessages />
      <div className="mt-80">
        <FormMessages />
      </div>
    </>
  )
}

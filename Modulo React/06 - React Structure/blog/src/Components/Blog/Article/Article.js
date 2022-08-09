import Sidebar from "../../Shared/Sidebar/Sidebar";
import AboutMe from "./AboutMe/AboutMe";
import Comments from "./Comments/Comments";

import './Article.css';

const Article = () => {
    return (
        <div class="article-page">
            <div className="content">

                <div class="article-header">
                    <h1 class="title">This is an Article</h1>
                    <p class="subtitle">Lorem</p>
                </div>
                <div class="article-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lectus posuere, luctus ipsum non, vestibulum dolor. Phasellus nec justo a ligula interdum consequat. Donec felis diam, suscipit ut metus eget, facilisis consectetur orci. Etiam ut imperdiet felis. Nunc vehicula egestas viverra. Integer luctus ligula metus, fermentum dictum nibh placerat non. Proin scelerisque justo sed mi faucibus, euismod placerat arcu commodo. Pellentesque fermentum dui purus, aliquam imperdiet turpis porttitor non. Vestibulum vehicula nibh felis, quis eleifend dolor accumsan a. Suspendisse viverra rhoncus semper. Praesent vitae ipsum ut mauris euismod vulputate. Suspendisse lorem sem, ullamcorper sit amet felis sit amet, vestibulum tincidunt orci. Aliquam sed lectus nisi. Vivamus ut imperdiet lacus, in tincidunt ante. Sed malesuada suscipit auctor.
                    </p>
                    Vivamus at sapien vitae ligula egestas congue. Integer consectetur ante venenatis varius ultricies. Morbi suscipit lacus vel placerat laoreet. Sed euismod massa at libero vestibulum volutpat. Cras tempus vehicula leo vitae placerat. Maecenas sed diam at ex vestibulum consectetur non nec augue. Maecenas pretium odio vitae sapien venenatis venenatis. Suspendisse volutpat a tortor a sagittis. Pellentesque varius, nunc in bibendum tincidunt, mauris risus euismod mauris, quis scelerisque risus purus at mi. Aenean euismod lorem non egestas auctor. Aenean nec ante condimentum, lobortis ligula non, rutrum risus. Quisque fringilla, lacus ut feugiat consequat, turpis ligula pharetra massa, tristique tempor turpis dolor vel dolor.
                    <p>
                        Quisque massa turpis, interdum sit amet dui in, congue laoreet nisl. Integer iaculis in est quis ultricies. Maecenas nunc felis, imperdiet non ullamcorper et, tempor sit amet est. Vivamus quis blandit augue. In sed eleifend neque. Pellentesque venenatis et eros nec tempor. Sed vitae lacinia ipsum, nec interdum elit. Sed facilisis velit urna, vitae facilisis sem scelerisque in. Vivamus nec massa id nisl cursus interdum non laoreet ipsum. Ut vehicula scelerisque quam, et pretium enim hendrerit sed.
                    </p>
                    Aliquam vulputate neque libero, a volutpat massa condimentum vel. Morbi eu scelerisque augue. Integer faucibus sapien a auctor ultrices. Donec consectetur, ipsum sit amet tincidunt pharetra, sem metus tincidunt nibh, vitae commodo dui eros id nisi. Nunc id tristique quam. Integer ut elementum augue, et consectetur tellus. Donec at ante bibendum, cursus nisi fringilla, accumsan lorem. Cras a ipsum risus. Nullam nulla nulla, pretium a leo pretium, sollicitudin rutrum diam. Ut a ligula nec massa imperdiet sagittis.
                    <p>
                        Fusce pellentesque, ipsum eget eleifend auctor, purus nisi lobortis nunc, ac iaculis risus magna at ligula. Cras interdum nisl a ullamcorper auctor. Sed varius mollis imperdiet. Sed cursus leo et sem sollicitudin, eget accumsan diam ultrices. Maecenas nec lacinia est, in sollicitudin lacus. Pellentesque gravida mauris a orci scelerisque, sed pellentesque orci consequat. Aliquam vestibulum auctor sapien sollicitudin mattis. Nam malesuada tellus augue, a ultrices turpis semper quis. Praesent a dolor in eros vehicula imperdiet. Cras vitae risus eu turpis tempor ullamcorper sed ut nulla. Fusce sed nisl non metus efficitur ultricies in eu risus. Praesent tempus, tellus id gravida convallis, mi nisi euismod mauris, eu ultrices est ipsum eget lacus. Suspendisse sodales convallis dolor mollis lobortis. Vivamus at porta felis. Maecenas lobortis, ex ac porttitor eleifend, turpis magna hendrerit velit, et laoreet odio leo eu nulla. Phasellus eget tincidunt risus, in luctus quam.
                    </p>
                </div>
            </div>
            <Sidebar>
                <AboutMe name="Nelson Fernandes" description="Vivamus at sapien vitae ligula egestas congue" avatar="https://api.minimalavatars.com/avatar/awesome/svg" />
                <Comments comments={[]} />
            </Sidebar>
        </div>
    )
}

export default Article;